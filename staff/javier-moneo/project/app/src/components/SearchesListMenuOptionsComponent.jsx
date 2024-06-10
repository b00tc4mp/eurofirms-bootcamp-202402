import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import {
  ArchiveBoxIcon,
  ArrowRightCircleIcon,
  ChevronDownIcon,
  DocumentDuplicateIcon,
  HeartIcon,
  PencilSquareIcon,
  TrashIcon,
  UserMinusIcon,
  UserPlusIcon,
  HashtagIcon,
  MagnifyingGlassMinusIcon,
} from '@heroicons/react/20/solid';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import { DialogReportUser } from './DialogReportUser';
import logic from '../logic';
import { useNavigate } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function SearchesListMenuOptionsComponent({ search }) {
  const navigate = useNavigate();

  const handleReportUserClick = () => {
    if (!logic.isUserLoggedIn()) {
      navigate('/login');
      return;
    }
    if (confirm('Are you sure you want to report user?')) {
      console.log('Reporting user', search?.user?.id);
      logic
        .reportUser(search.edition?.id, search.user?.id)
        .then(() => {
          console.log('user reported');
        })
        .catch((error) => {
          errorHandler(error);
        });
    }
  };

  const handleReportSearchClick = () => {
    if (!logic.isUserLoggedIn()) {
      navigate('/login');
      return;
    }
    if (confirm('Are you sure you want to report search?')) {
      console.log('Reporting search', search.id);
      logic
        .reportSearch(search.edition?.id, search.id)
        .then(() => {
          console.log('search reported');
        })
        .catch((error) => {
          errorHandler(error);
        });
    }
  };

  const handleReportTagClick = () => {
    if (!logic.isUserLoggedIn()) {
      navigate('/login');
      return;
    }
    if (confirm('Are you sure you want to report tag?')) {
      console.log('Reporting tag', search.tag?.id);
      logic
        .reportTag(search.edition?.id, search.tag?.id)
        .then(() => {
          console.log('tag reported');
        })
        .catch((error) => {
          errorHandler(error);
        });
    }
  };

  const errorHandler = (error) => {
    console.error(error.message);

    let feedback = error.message;

    if (
      error instanceof TypeError ||
      error instanceof RangeError ||
      error instanceof ContentError
    )
      feedback = `${feedback}, please correct it`;
    else if (error instanceof DuplicityError)
      feedback = `${feedback}, please try with another user`;
    else feedback = 'sorry, there was an error, please try again later';

    alert(feedback);
  };

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            <EllipsisHorizontalIcon
              className="h-5 w-5 rounded-full hover:fill-gray-700"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    onClick={handleReportUserClick}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'group flex items-center px-4 py-2 text-sm'
                    )}
                  >
                    <UserMinusIcon
                      className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    Report User
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    onClick={handleReportSearchClick}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'group flex items-center px-4 py-2 text-sm'
                    )}
                  >
                    <MagnifyingGlassMinusIcon
                      className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    Report Search
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    onClick={handleReportTagClick}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'group flex items-center px-4 py-2 text-sm'
                    )}
                  >
                    <HashtagIcon
                      className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    Report Hashtag
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}

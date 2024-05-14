import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import logic from '../logic';
import { errors } from '../com';

const { ContentError, MatchError, DuplicityError, RangeError, TypeError } =
  errors;

export default function Comments() {
  return <div>Comments</div>;
}

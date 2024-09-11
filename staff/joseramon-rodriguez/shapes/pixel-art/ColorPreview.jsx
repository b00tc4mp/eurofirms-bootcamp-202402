function ColorPreview(props) {
    return <>
        <span>Color in use</span>
        <div className="color-preview" style={{ backgroundColor: `${props.previewColor}` }}></div>
    </>
}
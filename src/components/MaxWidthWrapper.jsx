function MaxWidthWrapper({className, children}) {
  return (
    <div className={`px-3 md:px-28 pt-24 md:pt-30 ${className || ""}`}>
      {children}
    </div>
  );
}

export default MaxWidthWrapper;

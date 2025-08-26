function MaxWidthWrapper({className, children}) {
 return <div className={`px-6 md:px-28 ${className || ''}`}>
          {children}
        </div>
}

export default MaxWidthWrapper
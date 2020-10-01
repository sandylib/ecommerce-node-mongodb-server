export const catchAsync = (handle) =>
  (...args) => handle(...args).catch(args[2]);

export const notFound = (req, res, next) => {
  res.status(404).json({message: 'Not found'})
}

export const serverError = (err, req, res, next) => {
  if(!err.status){
    console.log(err.stack)
  }
  
  res.status(err.status || 500).json({message: err.message || 'Internal Server Error'})
}
if (process.env.NODE_ENV == "production") {
  module.exports = {mongoURI: "mongodb+srv://caiomarcelo79:caio123@blogapp-prod.jbhni3j.mongodb.net/?retryWrites=true&w=majority&appName=blogapp-prod"}
}else{
  module.exports = {mongoURI: "mongodb://localhost/blogapp"}
}
// a library to wrap and simplify api calls
import apisauce from 'apisauce'

// our "constructor"
// const create = (baseURL = 'https://api.github.com/') => {
// const create = (baseURL = 'http://enviado.com/') => {
const create = (baseURL = './api/') => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 10000  
  })
  
  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //
  // const getRoot = () => api.get('')
  // const getRate = () => api.get('rate_limit')
  // const getUser = (username) => api.get('search/users', {q: username})
  // //no fletero
  //const postLogin = (u,p) => api.post('api/authentication/login', {username: u, password: p })
  //   const postLogin = (u,p) => api.post('api/authentication/loginfletero', {username: u, password: p })
  //remitos por hoja de ruta
  //const getRemitos = (token) => api.get('api/remitos/ListadoRemitoRuteo', { token: token })
  //   const getRemitos = (hojaruta,token) => api.get('api/remitos/ListadoRemitosHojaRuta', { hojaruta: hojaruta, token: token })
  //   const getHojaRuta = (car_id, estado) => api.get('api/remitos/ListadoHojasRuta', { car_id: car_id, estado: estado })
  //   const getMotivos = (token) => api.get('api/remitos/motivos', { token: token })
  //   const postRemitoEstado = (token, body) => api.post('api/remitos/actualizaestado/?token=' + token, body )
  
  const listProducts = () => api.get('products')
  const createProduct = (product) => api.post('product', product)
  const removeProduct = (id) => api.delete(`product/${id}`)
  const searchProduct = (query) => api.get('product/search/?query', query )
  

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    listProducts,
    createProduct,
    removeProduct,
    searchProduct
  }
}

// let's return back our create method as the default.
export default {
  create
}

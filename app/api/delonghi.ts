export const delonghiApi = $fetch.create({
  baseURL: 'https://data.delonghigroup.com:8443',
  headers: {
    'Content-Type': 'application/json',
    'user-agent': 'RecipeBook/1 (iPad; iOS 17.1; Scale/2.00)',
    Cookie:
      'JSESSIONID=6F2040AD4637485F994868E4E0E24994; GUEST_LANGUAGE_ID=en_INT; JSESSIONID=C536BE1B3945BB9FC2BFBFC857F277FF',
    'Accept-Language': 'en-PL;q=1, ru-PL;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
    Connection: 'keep-alive',
  },
  async onRequest({ request, options }) {
    console.log('request', request, options)
  },
})

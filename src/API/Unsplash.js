import axios from 'axios';



export default axios.create({

    baseURL:'https://api.unsplash.com',
    headers : {

        Authorization:'Client-ID l5runTAFhwnzLFDFn0g_OK-kKa4DLjTiCEmj8ybQSME'
    }
})
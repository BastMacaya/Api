const express = require('express');
const router = express();
const bodyParser = require('body-parser');
const cors = require('cors');

router.use(cors());

router.use(express.json());
router.use(bodyParser.urlencoded({ extended: false }));
/* JsonWebToken*/


/* acceso a las rutas del web service*/
router.use('/api',require('./router/RutasWeb'))


/* Listener*/
router.listen(4000,() => {
    console.log('Esta wea esta corriendo en el puerto 4000')
})asdasdasd
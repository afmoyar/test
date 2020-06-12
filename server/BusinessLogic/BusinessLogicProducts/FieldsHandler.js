
//Function used to check the request fields (valid emails, valid field lengths and valid text fields)
var validator = require('validator');

// Import logger
const logger = require('../../utils/logger/logger');

// Check fields
async function check_fields(req){
    data = req.body.request
    for (const key of Object.keys(data)) {
      field = data[key]
      fieldName = ""
      if((key == 'User_name' || key == 'Driver_name')
          && !validator.isAlpha(validator.blacklist(field, ' '))){
          logger.info('Check field: Name "' + field + '" invalid')
          fieldName = "Nombre"
          return "El Nombre no es válido"
      }
      if((key == 'User_last_name' || key == 'Driver_last_name')
          && !validator.isAlpha(validator.blacklist(field, ' '))){
          logger.info('Check field: Lastname "' + field + '" invalid')
          fieldName = "Apellido"
          return "El Apellido no es válido"
      }
      if((key == 'Driver_password' || key == 'User_password')){
          fieldName = "Contraseña"
      }
      if((key == 'Driver_address' || key == 'User_address')){
          fieldName = "Dirección"
      }
      if((key == 'Identity_card') && !validator.isNumeric(field)){
         logger.info('Check field: Identity card "' + field + '" invalid')
         fieldName = "Cédula"
         return "La Cédula no es válida"
      }
      if((key == 'Driver_phone') && !validator.isNumeric(field)){
        logger.info('Check field: Phone "' + field + '" invalid')
        fieldName = "Teléfono"
        return "El Teléfono no es válido"
      }
      if((key == 'User_Email' || key == 'Driver_Email') && !validator.isEmail(field)){
         logger.info('Check field: E-Mail "' + field + '" invalid')
         fieldName = "E-Mail"
         return "El E-Mail no es válido"
      }
      if((key == 'Plate')){
        fieldName = "Placa"
      }
      if((key == 'Brand')){
        fieldName = "Marca"
      }
      if((key == 'Model')){
        fieldName = "Modelo"
      }
      if((key == 'Payload_capacity') && !validator.isNumeric(field)){
        logger.info('Check field: Payload capacity "' + field + '" invalid')
        fieldName = "La capacidad de carga"
        return "La capacidad de carga no es válida"
      }
      if((key=="Origin_coord")){
  
      }
      if((key=="Destination_coord")){
  
      }
      if((key == 'Weight') && !validator.isNumeric(field)){
        logger.info('Check field: Phone "' + field + '" invalid')
        fieldName = "Peso"
        return "El Peso no es válido"
      }
      if((key=="Description")){
        fieldName = "Descripcion"
      }
      if((key=="Date")){
        fieldName = "Date"
      }
      if((key=="Id_user") && !validator.isNumeric(field)){
        logger.info('Check field: Phone "' + field + '" invalid')
        fieldName = "Id_user"
        return "El id de usuario no es válido"
      }
      //length validation
      if(field.length == 0 && key!="Comments"){
        logger.info("Check field: Field can't be empty")
        return "El campo '" + fieldName + "' no puede estar vacio"
      }
    }
    logger.info("Check field: Field is valid")
    return true;
  }
  module.exports = {
    check_fields : check_fields
  };
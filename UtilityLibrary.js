

function SetNameField(executionContext,nameField,fieldArray)
{
    var formContext = executionContext.getFormContext();
    //const myArray = ['ljr_account', 'ljr_service', 'ljr_startdate'];

    var nameValue = "";
    for (let i = 0; i < fieldArray.length; i++) {
      var displayValue = fieldArray[i];
      if(displayValue instanceof Date)
      {
        displayValue = displayValue.toLocaleDateString().split('/').reverse().join('-')
      }

      nameValue = nameValue.concat(" - ",displayValue)
      //console.log(myArray[i]);
    }

    var accountName = formContext.getAttribute("ljr_account").getValue()[0].name;
    var serviceName = formContext.getAttribute("ljr_service").getValue()[0].name;
    var startDate = formContext.getAttribute("ljr_startdate").getValue();

    var formattedDate = startDate.toLocaleDateString().split('/').reverse().join('-');
    // Output: yyyy-mm-dd


    var nameValue = accountName + " - " + serviceName + " - " + formattedDate;

    formContext.getAttribute(nameField).setValue(nameValue);
    //formContext.getAttribute("ljr_name").setValue(nameValue);
    // set ljr_name = ljr_account + ljr_service + ljr_startdate
}

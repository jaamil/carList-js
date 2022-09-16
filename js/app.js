// list Car Name show 

function getSelectId(elementId) {
    const getSelectBtn = document.getElementById(elementId);
    const getSelectBtnValue = getSelectBtn.innerText;
  
    const getOlList = document.getElementById("ol-list");
    const list1 = document.createElement("li");
    list1.innerText = getSelectBtnValue;
    getOlList.appendChild(list1);

    
  }

  
  document.getElementById('bmw-btn').addEventListener('click', function stateHandle(){
      getSelectId("BMW");
      
  })
  document.getElementById('bugatti-btn').addEventListener('click', function(){
      getSelectId("bugatti");
  })
  document.getElementById('lamborghini-btn').addEventListener('click', function(){
      getSelectId("lamborghini");
  })
  document.getElementById('ford-btn').addEventListener('click', function(){
      getSelectId("ford");
  })
  document.getElementById('ferrari-btn').addEventListener('click', function(){
      getSelectId("ferrari");
  })
  document.getElementById('RolseRyels-btn').addEventListener('click', function(){
      alert(getSelectId("RolseRyels"), 'Not click allow this button');
      
  })



  // calculate Part start 

document.getElementById('calulate-btn').addEventListener('click', function(){
    const perCarField = document.getElementById('per-car')
    const perCarValue = perCarField.value 
    const perCarString = parseFloat(perCarValue)
    
    const getOlList = document.getElementById('ol-list')
    const getOlListValue = getOlList.childElementCount
    
    const newCarExpenses = getOlListValue * perCarString
    

    const carExpenses = document.getElementById('car-expenses')
    const carExpensesValue = carExpenses.innerText
    const carExpensesValueString = parseFloat(carExpensesValue)
    carExpenses.innerText = newCarExpenses
    
})

// total calculte part 

document.getElementById('total-calculate').addEventListener('click', function(){

    const perCarField = document.getElementById('per-car')
    const perCarValue = perCarField.value 
    const perCarString = parseFloat(perCarValue)
    
    const getOlList = document.getElementById('ol-list')
    const getOlListValue = getOlList.childElementCount
    
    let newCarExpenses = getOlListValue * perCarString
    

    const carExpenses = document.getElementById('car-expenses')
    const carExpensesValue = carExpenses.innerText
    const carExpensesValueString = parseFloat(carExpensesValue)
    carExpenses.innerText = newCarExpenses

    // total calculte main part 
    const staffField = document.getElementById('staff-field')
    const staffFieldValue = staffField.value
    const staffFieldValueString = parseFloat(staffFieldValue)

    const rentField = document.getElementById('rent-field')
    const rentFieldValue = rentField.value
    const rentFieldValueString = parseFloat(rentFieldValue)

    const totalCalculate =  newCarExpenses + staffFieldValueString + rentFieldValueString
    


    const totalExpenses = document.getElementById('total-expenses')
    const totalExpensesValue = totalExpenses.innerText
    const totalExpensesValueString = parseFloat(totalExpensesValue)
    totalExpenses.innerText = totalCalculate
    
    
    
})
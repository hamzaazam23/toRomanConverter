const numInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");



const isValid = (str,int)=>{
  let errText = ""

  if (str===''){
    errText = "Please enter a valid number"
  }else if(int<0){
    errText = "Please enter a number greater than or equal to 1"
  }else if (int>3999){
    errText = "Please enter a number less than or equal to 3999"
  }else{
    return true
  }
output.innerText = errText 
output.classList.add("alert")

return false
}


const toRomanConverter= (num)=>{
   const ref = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
const roman =[]
ref.forEach(function (arr){
  while (num>=arr[1]){
    roman.push(arr[0])
    num-=arr[1]
}})
return roman.join('')
}

const clearOutput = ()=>{
  output.innerText=""
  output.classList.remove("alert")

}

const updateUI = ()=>{
  const str = numInput.value
  const int = parseInt(str,10)

  clearOutput()
  output.classList.remove("hidden")

  if (isValid(str,int)){
    output.innerText=toRomanConverter(int)
  }

}

convertBtn.addEventListener("click",updateUI)
numInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    updateUI()
  }
});



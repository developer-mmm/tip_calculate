interface CalcObj {
    tip: number;
  }
  
  const calcObj: CalcObj = {
    tip: 0,
  };
  
  window.onload = () => {
    const calculateButton = document.querySelector<HTMLButtonElement>("#calculate");
    const resetButton = document.querySelector<HTMLButtonElement>("#reset");
    
    if (calculateButton) {
      calculateButton.onclick = calculateTip;
    }
  
    if (resetButton) {
      resetButton.onclick = resetValues;
    }
  
    const tips = document.querySelectorAll<HTMLDivElement>(".tip");
  
    tips.forEach((tip) => {
      tip.addEventListener("click", handleTipClick);
    });
  };
  
  function handleTipClick(e: MouseEvent) {
    const target = e.target as HTMLElement;
    calcObj.tip = Number(target.textContent?.split("%")[0]);
  }
  
  function calculateTip() {
    const amountInput = document.querySelector<HTMLInputElement>("#amount");
    const peopleInput = document.querySelector<HTMLInputElement>("#people");
  
    const amount = Number(amountInput?.value);
    const people = Number(peopleInput?.value);
  
    if (!amount || !people) {
      alert("Please enter values");
      return;
    }
  
    const tip = (amount * calcObj.tip) / 100;
    const billPerPerson = (amount + tip) / people;
  
    const tipAmountElement = document.querySelector<HTMLSpanElement>("#tipamount");
    const totalAmountElement = document.querySelector<HTMLSpanElement>("#totalamount");
  
    if (tipAmountElement) {
      tipAmountElement.innerText = (tip / people).toFixed(2);
    }
    
    if (totalAmountElement) {
      totalAmountElement.innerText = billPerPerson.toFixed(2);
    }
  }
  
  function resetValues() {
    const tipAmountElement = document.querySelector<HTMLSpanElement>("#tipamount");
    const totalAmountElement = document.querySelector<HTMLSpanElement>("#totalamount");
  
    if (tipAmountElement) {
      tipAmountElement.innerText = "0.00";
    }
    
    if (totalAmountElement) {
      totalAmountElement.innerText = "0.00";
    }
  
    const amountInput = document.querySelector<HTMLInputElement>("#amount");
    const peopleInput = document.querySelector<HTMLInputElement>("#people");
  
    if (amountInput) amountInput.value = '';
    if (peopleInput) peopleInput.value = '';
  }
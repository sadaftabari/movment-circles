$(document).ready(() => {
    const numberInput = $('#number');
    const stepInput = $('#step');
    const upbtn = $('#up');
    const downbtn = $('#down');
  
    // Get input values after elements are loaded
    const numberInputValue = numberInput.val();
    const stepInputValue = stepInput.val();
  
    const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const circles = $('<div class="circles"></div>');
  
    $('.btns').after(circles);
  
    const newarrayeinfo = () => {
      circles.empty();
      Numbers.map((i) => {
        const circle = $('<div class="circle">' + i + '</div>');
        circles.append(circle);
      });
    };
  
    newarrayeinfo(); // Initial display
  
    downbtn.on('click', (() => {
      const numberInputValue = numberInput.val();
      const stepInputValue = stepInput.val();
      const findValueIndex = Numbers.findIndex((number) => {
        return number === +numberInputValue;
      });
      if (findValueIndex - +stepInputValue < 0 || +stepInputValue < 0 || stepInputValue===""||numberInputValue==="") {
        alert('enter the right value');

      } else {
        [Numbers[findValueIndex], Numbers[findValueIndex - +stepInputValue]] = [
          Numbers[findValueIndex - +stepInputValue],
          Numbers[findValueIndex],
        ];
        newarrayeinfo();
      }
    }));
  
    upbtn.on("click", (() => {
      const numberInputValue = numberInput.val();
      const stepInputValue = stepInput.val();
      const findValueIndex = Numbers.findIndex((number) => {
        return number === +numberInputValue;
      });
      if (findValueIndex + +stepInputValue > Numbers.length - 1||+stepInputValue < 0 || stepInputValue===""||numberInputValue==="") {
        alert('enter the right value');
      } else {
        [Numbers[findValueIndex], Numbers[findValueIndex + +stepInputValue]] = [
          Numbers[findValueIndex + +stepInputValue],
          Numbers[findValueIndex],
        ];
        newarrayeinfo();
      }
    }));

    const reloadBtn = $('#reload');
  reloadBtn.on('click', () => {
     

    window.location.reload();
  });
   
  });
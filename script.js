const signInBtn= document.getElementById("signIn");
const signUpBtn=document.getElementById("signUp");
const firstform=document.getElementById("form1");
const secondform=document.getElementById("form2");
const container=document.querySelector(".container");

signUpBtn.addEventListener("click", () =>
    {
      container.classList.add("right-panel-active")
    }
);

signInBtn.addEventListener("click",() =>
    {
        container.classList.remove("right-panel-active");
    }
);



firstform.addEventListener("submit", (e) => e.preventDefault());
secondform.addEventListener("submit", (e) => e.preventDefault());
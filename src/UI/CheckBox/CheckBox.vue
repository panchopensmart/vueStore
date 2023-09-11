<template>
  <label class="checkbox style-c">
    <input type="checkbox"/>
    <div class="checkbox__checkmark"></div>
  </label>
</template>

<script>
export default {
  name: "CheckBox"
}
</script>

<style scoped>
.checkbox.style-c {
  display: inline-block;
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.checkbox.style-c input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkbox.style-c input:checked ~ .checkbox__checkmark {
  background-color: #7397F5;
}
.checkbox.style-c input:checked ~ .checkbox__checkmark:after {
  opacity: 1;
}
.checkbox.style-c:hover input ~ .checkbox__checkmark {
  background-color: #D5D5D5;
}
.checkbox.style-c:hover input:checked ~ .checkbox__checkmark {
  background-color: #7397F5;
}
.checkbox.style-c .checkbox__checkmark {
  position: absolute;
  top: 2px;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #f5f5f5;
  border: 1px solid #AAAAAA;
  transition: background-color 0.25s ease;
  border-radius: 3px;
}
.checkbox.style-c .checkbox__checkmark:after {
  content: "";
  position: absolute;
  left: 7px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid #FFF;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 0.25s ease;
}
.checkbox.style-c .checkbox__body {
  color: #333;
  line-height: 1.4;
  font-size: 14px;
}
</style>

echo "Hello, "$USER".  Just a couple questions and I will make your LitElement Class."
echo "                      ___"
echo '                     /o o\'
echo '                     |[-]|'
echo '                     |,,,|'
echo""
echo -n "Enter the element name (ex. bcb-test) and press [ENTER]: "
read file
echo -n "Enter the class name (ex. BcbTest) and press [ENTER]: "
read  class

      cd js
      cp -r ~/public_html/library/lit-template/js/bcb-class.js .
      sed -i "s/bcb-class/$file/g" bcb-class.js
      sed -i "s/BcbClass/$class/g" bcb-class.js
      mv bcb-class.js "$file.js"
      cd ..


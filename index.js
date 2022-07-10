const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => { 
  let something = '';
  let i=0;
  let title = [];
  for (const item of tutorials) {
    const strToArr = item.split(' ');
    something = strToArr.map(word => word[0].toUpperCase() + word.substring(1));
    title[i] = something.join(' ');
    console.log(title[i]);
    i++;

  }
  return title;
    
}
/*
import java.util.Arrays;
public class ArrayOfStrings {
   public static void main(String args[]) {
      String stringArray[] = {"Hello ", " how", " are", " you", " welcome", " to", " Tutorialspoint"};
      StringBuffer sb = new StringBuffer();
      for(int i = 0; i < stringArray.length; i++) {
         sb.append(stringArray[i]);
      }
      String str = Arrays.toString(stringArray);
      System.out.println(str);
   }
}


*/ 
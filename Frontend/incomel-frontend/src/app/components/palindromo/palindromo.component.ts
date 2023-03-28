import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  templateUrl: './palindromo.component.html',
  styleUrls: ['./palindromo.component.css']
})
export class PalindromoComponent {

  public myArray:string[] = [];

  buscarPalindromos(input:HTMLInputElement){

    this.myArray = [];
    let split = input.value.split(' ');

    for(let x =0; x < split.length; x++){
      this.seekAllPalindrome(split[x]);
    }
    
    console.log(this.myArray);
  }

  palindrome(str:string) {
    var reverseStr = str.split('').reverse().join(''); 
    return reverseStr === str;
  }

  seekAllPalindrome(cadena:string){
    
    if(cadena.length == 0)
        return;
    let cadenaSnapshot = String(cadena);
    let newstr = "";

    for(let i = 0; i < cadena.length; i++){
        newstr += cadena[i];
        let isPalindrome = this.palindrome(newstr);
        if(isPalindrome && (newstr.length > 1)){
             console.log(newstr);
            if (!this.myArray.includes(newstr))
                this.myArray.push(newstr);
        }
    }
    
    this.seekAllPalindrome(cadenaSnapshot.substring(1, cadenaSnapshot.length));
    
}
}

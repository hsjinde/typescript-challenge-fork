/**
 * 反轉輸入的字串
 * @param str - 要反轉的字串
 * 
 * 這個函式需要將輸入的字串反轉。你可以使用 JavaScript 的 String 和 Array 方法來完成這個任務。
 * 首先，使用 split 方法將字串轉換為字元陣列。然後，使用 reverse 方法將陣列反轉。最後，使用 join 方法將反轉後的陣列轉換回字串。
 */
export function reverseString(str: string): string {
    // // 在此實現函式
    // let stack: string[] = []; 
    // for (let i = 0; i < str.length; i++) {
    //     stack.push(str[i]);
    // }
    // // 從堆疊中彈出每個字符，以反轉字符串
    // let reversedStr: string = "";
    // while (stack.length > 0) {
    //     reversedStr += stack.pop();
    // }

    // return reversedStr;

    return str.split('').reverse().join('');

    // let reversedStr = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     reversedStr += str[i];
    // }
    // return reversedStr;
}
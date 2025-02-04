/**
 * 任務：實作一個 async 函式 `fetchData`，該函式應該能夠從指定的 URL 取得資料。
 * 範例：fetchData('https://jsonplaceholder.typicode.com/todos/1') 應該回傳一個包含 id、title 等屬性的物件
 * @param url - 要取得資料的 URL
 * @returns - 回傳一個 Promise，該 Promise resolve 的值應該是從 URL 取得的資料
 */

// 請在下方寫下你的程式碼
// export async function fetchData(url: string): Promise<any> {
//     try {
//         // 使用 fetch 函式發送 HTTP 請求
//         const response = await fetch(url);

//         // 確認 HTTP 狀態碼是否為成功 (200 OK)
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         // 將回應的 JSON 資料解析為 JavaScript 物件
//         const data = await response.json();

//         // 返回解析後的資料
//         return data;
//     } catch (error) {
//         // 處理錯誤情況，例如網路錯誤或 JSON 解析錯誤
//         console.error('Error fetching data:', error.message);
//         throw error;
//     }
// }

export async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    return await response.json() as T;
}
//CD/ID
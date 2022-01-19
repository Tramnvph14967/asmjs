/**
 * ôn tập callback
 * ôn tập promise
 * async/await
 * API là gì? hoạt động như nào?
 * Hướng dẫn sử dụng test API ( thunder client )
 * Sử dụng nó như nào trong Javascript?
 */

// callback: 1 hàm được gọi ra thông qua 1 hàm khác, và truyền vào như một tham số
// function removeLocalStorage(result) {
//     console.log(result);
// }

// function signout(user, callback) {
//     if('user == admin') callback();
// }
// click -> goi sum(user, removeLocalStorage);

// promise: Là 1 đối tượng đặc biệt, xử lý bất đồng bộ

function resolveAfter2s() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(["Dat", "Kien", "Son"]);
            } catch (error) {
                reject("Lỗi kết nối");
            }
        }, 3000);
    });
}

const getData = resolveAfter2s();

getData.then((result) => [...result, "Nhung"])
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

async function getData2() {
    const result = await resolveAfter2s();
    const data = await [...result, "nhung"];
    console.log(data);
}
getData2();
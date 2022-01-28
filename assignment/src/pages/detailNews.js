// import data from "../data";

// const DetailNewsPage = {
//     print(id) {
        
//         const result = data.find((post) => post.id == id);
        
//         return `
//         <div class="max-w-5xl mx-auto" >
//             <h1>${result.title}</h1>
//             <img src="${result.img}" />
//             <div>${result.desc}</div>
//         </div>
//         `;
//     },
// };
// export default DetailNewsPage;



// import data from "../data";

import axios from "axios";
import { get } from "../api/post";

const DetailNewsPage = {
    async render(id) {
        const { data } = await get(id);
        return `
            <h1>${data.title}</h1>
            <img src="${data.img}" />
            <div>${data.desc}</div>
        `
    },
};
export default DetailNewsPage;
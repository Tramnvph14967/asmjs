const Nav = {
    print() {
        return /* html */`
        <nav>
        <ul class="flex justify-around">
            <li><a href="/" class="block py-3 px-4 text-white hover:bg-blue-500">Trang chủ</a></li>
            <li><a href="/about" class="block py-3 px-4 text-white hover:bg-blue-500">About Page</a></li>
            <li><a href="/product" class="block py-3 px-4 text-white hover:bg-blue-500">Chương trình đào tạo</a></li>
            <li><a href="" class="block py-3 px-4 text-white hover:bg-blue-500">Góc sinh viên</a></li>
            <li><a href="" class="block py-3 px-4 text-white hover:bg-blue-500">Tuyển dụng</a></li>
         
          <div class="action py-3 px-4">
            <input type="text">
            <button class="bg-[#272f54] text-white w-20 hover:bg-red-800" type="submit"> Tìm kiếm </button>
          </div>
        </ul>
  
      </nav>`;
    },
};
export default Nav;
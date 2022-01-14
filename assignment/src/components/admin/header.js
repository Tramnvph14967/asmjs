import nav from "./nav";

const Dashboard = {
    print() {
        return /* html */`
            <div class="max-w-5xl mx-auto">
            <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
            
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <a href="/admin/dashboard" class="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Trang Chủ</a>
              <a href="/admin/news" class="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Tin Tức</a>
              <a href="/admin/account" class="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Tài Khoản</a>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <div class="text-gray-100"> Nguyễn Văn Trăm</div>
            <div class="ml-3 relative">
              <div>
                <button type="button" class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white Dropdown menu" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/241519190_1105170456955298_4454964298551639504_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=wQW1BVAM0HoAX-ic436&tn=GAXgTIe1gZJS4IAR&_nc_ht=scontent.fhan15-1.fna&oh=00_AT8dj8M3LBsEZaINn9Oem3odJSnTxCa7f4dFT8DbvYcbiQ&oe=61E69366" alt="">
                </button>
              </div>
            </div>
            
            
          </div>
          
        </div>
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <button type="button" class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    
</nav>
            <div class="min-h-full">
            <header class="bg-white shadow ">
              <div class="max-w-7xl text-right p-4">
                <a href="/home" class="text-gray-400 hover:bg-gray-700 hover:text-white px-3 rounded-md text-sm font-medium" aria-current="page">Trang Web</a>
                <a href="" class="text-gray-400 hover:bg-gray-700 hover:text-white px-3 rounded-md text-sm font-medium" aria-current="page">Hồ Sơ</a>
                <a href="#" class="text-gray-400 hover:bg-gray-700 hover:text-white px-3 rounded-md text-sm font-medium">Cài Đặt</a>
                <a href="#" class="text-gray-400 hover:bg-gray-700 hover:text-white px-3 rounded-md text-sm font-medium">Đăng Xuất</a>
              </div>
            </header>
            
          </div>
            </div>
        `;
    },
};
export default Dashboard;
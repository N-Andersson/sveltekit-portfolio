
<script>
    export let title;
    export let description;
    export let imgsrc; 
    export let route;

</script>


<div class="container mx-auto flex flex-col md:flex-row items-center  dark:bg-orange-50">
    <!--Left Col-->
    <div class="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6 my-12 md:my-24 ">
        <h1 class="font-bold text-3xl my-4">{title}</h1>
        <p class="leading-normal mb-4">{description}</p>
        <a href="{route}" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <button class="bg-transparent hover:bg-gray-900 text-gray-900 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-gray-900 hover:border-transparent">Super Button</button>
        </a>
    </div>
    <!--Right Col-->
    <div class="w-full lg:w-1/2 lg:py-6 text-center">
        <!--Add your product image here-->
        <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="{imgsrc}" alt="">
        <!--svg class="fill-current text-gray-900 w-3/5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17 6V5h-2V2H3v14h5v4h3.25H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6zm-5.75 14H3a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5.75zM11 8v8h6V8h-6zm3 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg-->
    </div>
</div>

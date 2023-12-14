
export const TechCard = () => {
    return (
        <div className='bg-custom-black bg-stardust-pattern grid grid-cols-3 grid-rows-2 place-items-center w-[40%] mt-2 py-4 px-8 rounded-3xl border-2 border-transparent hover:border-custom-gray2 display-inline'>

                <svg className='mb-3 fill-custom-gray hover:fill-custom-orange' xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16"><path d="M10.77 7.3h.002c1.045.393 2.479.93 2.479 2.45a2.494 2.494 0 0 1-.224 1.02a2.514 2.514 0 0 1-1.515 1.364a2.52 2.52 0 0 1-1.035.115a1.853 1.853 0 0 1-.214.012a2.51 2.51 0 0 1-1.673-.65a2.524 2.524 0 0 1-.838-1.859c0-.202.078-.39.22-.532a.77.77 0 0 1 1.06 0a.74.74 0 0 1 .221.53c0 .952 1.041 1 1.25 1c.209 0 1.25-.048 1.25-1c0-.413-.447-.648-1.514-1.048h-.003C9.19 8.307 7.753 7.77 7.753 6.25c.003-.357.078-.699.224-1.02a2.5 2.5 0 0 1 .614-.842a2.48 2.48 0 0 1 .9-.52a3.476 3.476 0 0 1 2.023 0a2.524 2.524 0 0 1 1.738 2.381c0 .201-.078.39-.22.531a.77.77 0 0 1-1.061 0a.743.743 0 0 1-.22-.53c0-.952-1.041-1-1.25-1c-.209 0-1.25.048-1.25 1c0 .413.447.648 1.514 1.048l.005.002ZM5.751 4.5c0-.2.078-.388.22-.53a.768.768 0 0 1 1.06 0c.142.141.22.33.22.53v5a2.75 2.75 0 0 1-4.695 1.945A2.73 2.73 0 0 1 1.75 9.5V9c0-.2.078-.388.22-.53a.77.77 0 0 1 1.061 0c.142.141.22.33.22.53v.5c0 .33.134.652.366.884c.465.465 1.303.465 1.768 0c.232-.233.366-.555.366-.884v-5Z" /><title>JavaScript</title></svg>

                <svg className='mb-3 fill-custom-gray hover:fill-custom-orange' xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path d="M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85c-1.03 0-1.87-.85-1.87-1.85c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03c.6 0 1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68c0 1.69-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95c-1.46-.84-1.62-3.05-1-5.63c-2.54-.75-4.37-1.99-4.37-3.68c0-1.69 1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63c1.47-.84 3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26c0-.73-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26c0 .73 1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16c-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7c.64-.35.83-1.82.32-3.96c-.77.16-1.58.28-2.4.36c-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16c.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9Z" /><title>ReactJS</title></svg>

                <svg className='mb-3 fill-custom-gray hover:fill-custom-orange' xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path d="M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12Z"/><title>Tailwind</title></svg>

                <svg className='mb-3 fill-custom-gray hover:fill-custom-orange' xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16"><path d="M3 1.5a.25.25 0 0 0-.25.25v9.55c0 .09.048.172.125.217l4.859 2.802a.25.25 0 0 0 .245.003l5.141-2.817a.25.25 0 0 0 .13-.22V1.75A.25.25 0 0 0 13 1.5H3Zm-1.75.25C1.25.784 2.034 0 3 0h10c.966 0 1.75.784 1.75 1.75v9.536a1.75 1.75 0 0 1-.909 1.534L8.7 15.637a1.75 1.75 0 0 1-1.716-.018l-4.858-2.803A1.75 1.75 0 0 1 1.25 11.3V1.75ZM5 4.25a.75.75 0 0 1 .75-.75h4.615a.75.75 0 0 1 0 1.5H6.5v1.712h3.865a.75.75 0 0 1 .75.75v2.884a.75.75 0 0 1-.414.671l-2.308 1.154a.75.75 0 0 1-.67 0l-2.308-1.154a.75.75 0 0 1-.415-.67v-.578a.75.75 0 0 1 1.5 0v.114l1.558.779l1.557-.78v-1.67H5.75a.75.75 0 0 1-.75-.75V4.25Z"/><title>HTML</title></svg>

                <svg className='mb-3 fill-custom-gray hover:fill-custom-orange' xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16"><path d="M3 1.6a.25.25 0 0 0-.25.25v9.55c0 .09.048.172.125.217l4.859 2.802a.25.25 0 0 0 .245.003l5.141-2.817a.25.25 0 0 0 .13-.22V1.85A.25.25 0 0 0 13 1.6H3Zm-1.75.25C1.25.884 2.034.1 3 .1h10c.966 0 1.75.784 1.75 1.75v9.536a1.75 1.75 0 0 1-.909 1.534L8.7 15.738a1.75 1.75 0 0 1-1.716-.02l-4.858-2.802A1.75 1.75 0 0 1 1.25 11.4V1.85ZM5 4.35a.75.75 0 0 1 .75-.75h4.615a.75.75 0 0 1 .75.75v6.096a.75.75 0 0 1-.414.671l-2.308 1.154a.75.75 0 0 1-.67 0l-2.308-1.154a.75.75 0 0 1-.415-.67v-.578a.75.75 0 1 1 1.5 0v.114l1.558.778l1.557-.778V8.312H7a.75.75 0 1 1 0-1.5h2.615V5.1H5.75A.75.75 0 0 1 5 4.35Z"/><title>CSS</title></svg>

                <svg className='mb-3 fill-custom-gray hover:fill-custom-orange' xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16"><path d="M7.586.102a.75.75 0 0 1 .756 0l6.214 3.625a.75.75 0 0 1 .373.648v7.25a.75.75 0 0 1-.373.648l-6.214 3.625a.75.75 0 0 1-.756 0l-1.553-.906a.75.75 0 0 1 .756-1.296l1.175.686l5.465-3.188V4.806L7.964 1.618L2.5 4.806v6.388l1.117.652c.344.11.77.137 1.069.005a.75.75 0 0 0 .364-.34c.104-.188.2-.501.2-1.011V5.25a.75.75 0 0 1 1.5 0v5.25c0 .69-.129 1.272-.39 1.74a2.25 2.25 0 0 1-1.068.983c-.806.356-1.697.21-2.242.014a.75.75 0 0 1-.124-.058l-1.554-.906A.75.75 0 0 1 1 11.625v-7.25a.75.75 0 0 1 .372-.648zm.66 5.181c.397-.472 1.017-.783 1.858-.783c.78 0 1.375.268 1.778.693a.75.75 0 1 1-1.09 1.03C10.703 6.132 10.52 6 10.103 6c-.442 0-.624.148-.709.248a.642.642 0 0 0-.145.377c0 .083.036.247.145.377c.085.1.267.248.71.248a.75.75 0 0 1 .212.03c.62.09 1.092.368 1.416.753c.372.443.496.967.496 1.342c0 .375-.124.899-.496 1.342c-.397.472-1.017.783-1.858.783c-.78 0-1.375-.268-1.777-.693a.75.75 0 0 1 1.09-1.03c.087.092.271.223.687.223c.442 0 .625-.148.71-.248a.642.642 0 0 0 .144-.377a.642.642 0 0 0-.145-.377c-.084-.1-.267-.248-.709-.248a.75.75 0 0 1-.213-.03c-.62-.09-1.092-.368-1.415-.753a2.137 2.137 0 0 1-.497-1.342c0-.375.124-.899.497-1.342"/><title>Node.js</title></svg>
                
                <svg className='fill-custom-gray hover:fill-custom-orange' xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32"><path d="M15.092 22.146c-.015.03-.03.054 0 0zm12.456-4.35c-1.006 0-1.998.23-2.9.675c-.295-.595-.6-1.115-.65-1.505c-.06-.455-.125-.725-.055-1.265s.385-1.305.38-1.36c-.005-.055-.07-.33-.715-.335s-1.2.125-1.265.295a6.09 6.09 0 0 0-.265.955c-.115.585-1.289 2.675-1.954 3.765c-.22-.425-.405-.8-.445-1.1c-.06-.455-.125-.725-.055-1.265s.385-1.305.38-1.36c-.005-.055-.07-.33-.714-.335s-1.2.125-1.265.295c-.065.17-.135.57-.265.955s-1.695 3.865-2.104 4.77c-.21.46-.39.83-.52 1.08c-.02.04-.035.065-.045.085c.015-.025.025-.05.025-.04c-.11.215-.175.335-.175.335v.005c-.085.16-.18.305-.225.305c-.03 0-.095-.42.015-.995c.235-1.21.79-3.09.785-3.155c-.005-.035.105-.36-.365-.535c-.455-.165-.62.11-.66.11s-.07.1-.07.1s.505-2.12-.97-2.12c-.92 0-2.2 1.01-2.829 1.925c-.395.215-1.25.68-2.15 1.175l-1.035.57c-.025-.025-.045-.05-.07-.075c-1.79-1.91-5.094-3.26-4.954-5.825c.05-.935.375-3.39 6.354-6.37c4.9-2.44 8.817-1.77 9.492-.28c.97 2.125-2.095 6.08-7.183 6.65c-1.94.215-2.959-.535-3.214-.815c-.265-.295-.305-.31-.405-.255c-.165.09-.06.35 0 .505c.15.395.775 1.095 1.84 1.445c.935.305 3.209.475 5.958-.59c3.089-1.19 5.494-4.505 4.788-7.28c-.718-2.82-5.394-3.745-9.815-2.175c-2.635.935-5.484 2.405-7.533 4.32C.26 11.361-.129 13.346.031 14.176c.57 2.945 4.629 4.865 6.253 6.285l-.225.125c-.815.405-3.909 2.025-4.684 3.735c-.875 1.94.145 3.33.814 3.52c2.09.58 4.229-.465 5.379-2.18s1.01-3.955.48-4.975c-.005-.015-.015-.025-.02-.04a72.558 72.558 0 0 1 1.815-1.04c-.2.54-.345 1.19-.42 2.13c-.09 1.1.365 2.525.955 3.085c.26.245.574.25.77.25c.69 0 1-.57 1.345-1.25c.425-.83.8-1.795.8-1.795s-.47 2.61.815 2.61c.47 0 .94-.605 1.15-.915v.005s.01-.02.035-.06c.05-.075.075-.12.075-.12v-.015c.19-.325.605-1.07 1.23-2.3c.81-1.59 1.584-3.575 1.584-3.575c.075.436.179.867.31 1.29c.14.475.435.995.67 1.5c-.19.26-.305.41-.305.41c0 .004.002.007.005.01c-.15.2-.32.415-.495.625c-.639.76-1.4 1.63-1.5 1.88c-.12.295-.09.515.14.685c.17.13.47.15.785.125c.575-.04.98-.18 1.175-.27a4.11 4.11 0 0 0 1.01-.53c.625-.46 1.005-1.12.97-1.99c-.02-.48-.175-.96-.365-1.41c.055-.08.115-.165.17-.25a26.716 26.716 0 0 0 1.755-3.031c.075.436.178.867.31 1.29c.12.405.355.85.57 1.285c-.93.755-1.505 1.63-1.704 2.205c-.37 1.065-.08 1.545.465 1.655c.245.05.595-.065.855-.175c.386-.129.75-.316 1.079-.555c.625-.46 1.23-1.105 1.189-1.98c-.015-.395-.125-.79-.27-1.17c.785-.33 1.805-.51 3.105-.36c2.784.325 3.329 2.065 3.224 2.79s-.69 1.13-.885 1.25c-.195.12-.255.165-.24.255c.025.13.115.125.28.095c.23-.04 1.46-.59 1.515-1.935c.08-1.7-1.555-3.57-4.45-3.555zM6.089 25.031c-.92 1.005-2.209 1.385-2.764 1.065c-.595-.346-.36-1.825.774-2.896c.69-.65 1.58-1.25 2.17-1.62c.135-.08.33-.2.57-.345a.828.828 0 0 1 .06-.035c.045-.03.095-.055.145-.085c.414 1.52.015 2.86-.955 3.915zm6.718-4.57c-.32.785-.994 2.785-1.405 2.68c-.35-.09-.565-1.615-.07-3.115c.25-.755.78-1.655 1.095-2.005c.505-.565 1.06-.745 1.19-.52c.175.295-.61 2.47-.81 2.96zm5.55 2.65c-.135.07-.26.115-.32.08c-.045-.025.055-.12.055-.12s.695-.745.97-1.085c.16-.2.345-.435.545-.695c0 .025.005.05.005.08c-.006.895-.866 1.5-1.256 1.74zm4.28-.975c-.1-.07-.085-.305.25-1.035c.13-.285.43-.765.95-1.225c.059.174.091.356.095.54c-.005 1.125-.81 1.545-1.295 1.72z"/><title>Sass</title></svg>

                <svg className='fill-custom-gray hover:fill-custom-orange' xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path d="M2.6 10.59L8.38 4.8l1.69 1.7c-.24.85.15 1.78.93 2.23v5.54c-.6.34-1 .99-1 1.73a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-.74-.4-1.39-1-1.73V9.41l2.07 2.09c-.07.15-.07.32-.07.5a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2c-.18 0-.35 0-.5.07L13.93 7.5a1.98 1.98 0 0 0-1.15-2.34c-.43-.16-.88-.2-1.28-.09L9.8 3.38l.79-.78c.78-.79 2.04-.79 2.82 0l7.99 7.99c.79.78.79 2.04 0 2.82l-7.99 7.99c-.78.79-2.04.79-2.82 0L2.6 13.41c-.79-.78-.79-2.04 0-2.82Z"/><title>git</title></svg>

                <svg className='fill-custom-gray hover:fill-custom-orange' xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path d="M11.966 0L1.608 5.965v12.07L12.035 24l10.358-5.965V5.965Zm1.421 7.02h.651v3.483h-.651l.015-.3c-.116.218-.333.343-.647.343c-.501 0-.93-.443-.93-1.075c0-.632.424-1.066.92-1.066c.329 0 .512.13.642.333zm6.83 0h.65v3.483h-.65l.014-.3c-.116.218-.333.343-.646.343c-.502 0-.931-.443-.931-1.075c0-.632.424-1.066.921-1.066c.328 0 .511.13.641.333zm-14.928.358h.646v1.07h.526v.54h-.526v.763c0 .207.068.25.17.25c.105 0 .183-.058.226-.086l.246.453a.865.865 0 0 1-.574.188c-.415 0-.714-.207-.714-.825v-.743h-.304v-.54h.304zM3.895 8.405c.338 0 .58.11.748.284l-.347.372a.634.634 0 0 0-.396-.154c-.15 0-.222.038-.222.12c0 .116.13.13.41.193c.3.068.676.207.676.641c0 .377-.198.685-.845.685c-.477 0-.757-.178-.935-.39l.38-.338a.74.74 0 0 0 .512.217c.212 0 .28-.039.28-.125c0-.111-.13-.111-.463-.198c-.28-.072-.593-.227-.593-.656c0-.463.356-.651.795-.651m4.018 0c.526 0 .926.284.926.93v1.168h-.646l.014-.285c-.154.237-.333.328-.608.328c-.376 0-.723-.169-.723-.646c0-.439.333-.617.84-.617h.477c-.01-.237-.126-.343-.343-.343a.643.643 0 0 0-.468.188l-.361-.385c.193-.189.41-.338.892-.338m2.71 0c.449 0 .772.328.772.911v1.187h-.651V9.36c0-.232-.11-.362-.342-.362c-.26 0-.415.145-.415.405v1.1h-.651V8.448h.65l-.014.338a.703.703 0 0 1 .651-.381m4.857 0c.526 0 .926.284.926.93v1.168h-.646l.014-.285c-.154.237-.332.328-.607.328c-.376 0-.724-.169-.724-.646c0-.439.333-.617.84-.617h.477c-.01-.237-.125-.343-.343-.343a.643.643 0 0 0-.467.188l-.362-.385c.193-.189.41-.338.892-.338m2.667 0c.135 0 .237.038.319.082l-.208.593a.567.567 0 0 0-.25-.063c-.295 0-.454.135-.454.574v.912h-.651V8.448h.651l-.01.372c.15-.338.391-.415.603-.415m-5.204.574c-.275 0-.448.188-.448.492c0 .323.173.506.448.506c.28 0 .463-.183.463-.506c0-.304-.183-.492-.463-.492m6.83 0c-.275 0-.449.188-.449.492c0 .323.174.506.449.506c.28 0 .463-.183.463-.506c0-.304-.184-.492-.463-.492m-12.024.69c-.164 0-.236.072-.236.188s.096.183.28.183c.265 0 .4-.116.4-.29v-.082zm7.567 0c-.164 0-.236.072-.236.188s.096.183.28.183c.265 0 .4-.116.4-.29v-.082zm-1.261 2.478c.766 0 1.317.267 1.713.965l-.938.603c-.207-.37-.431-.517-.775-.517c-.354 0-.578.224-.578.517c0 .361.224.508.741.732l.302.129c1.024.439 1.602.887 1.602 1.895c0 1.085-.853 1.679-1.999 1.679c-1.12 0-1.843-.534-2.196-1.232l.982-.568c.258.422.594.732 1.189.732c.5 0 .818-.25.818-.594c0-.414-.328-.56-.879-.801l-.301-.13c-.87-.37-1.447-.835-1.447-1.817c0-.904.689-1.593 1.766-1.593m-3.988.069h1.206v4.117c0 1.249-.732 1.817-1.8 1.817c-.965 0-1.525-.5-1.809-1.102l.982-.595c.19.336.362.62.775.62c.396 0 .646-.155.646-.757z"/><title>StandardJS</title></svg>
        </div>
    )
}
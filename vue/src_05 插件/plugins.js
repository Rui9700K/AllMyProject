const obj = {
    install(Vue){
    
        Vue.filter('slice', function (value) {
            return value.slice(0, 4)
        })//配置一个全局过滤器

        
    }
};

export default obj

new Vue({
    el: '#app',
    data: {
        currentFilter: 'ALL',
        projects: [
            {title: "Artwork", image: "https://picsum.photos/g/300?image=122", category: 'ART'},
            {title: "Charcoal", image: "https://picsum.photos/g/300?image=116", category: 'ART'},
            {title: "Sketching", image: "https://picsum.photos/g/300?image=121", category: 'DOODLES'},
            {title: "Acrillic", image: "https://picsum.photos/g/300?image=133", category: 'WORKSHOPS'},
            {title: "Pencil", image: "https://picsum.photos/g/300?image=134", category: 'DOODLES'},
            {title: "Pen", image: "https://picsum.photos/g/300?image=115", category: 'ART'},
            {title: "Inking", image: "https://picsum.photos/g/300", category: 'WORKSHOPS'},
        ]
    },
    methods: {
        setFilter: function(filter) {
            this.currentFilter = filter;
        }
    }
})

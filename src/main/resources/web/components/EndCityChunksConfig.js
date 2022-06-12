function createComponent(template) {
    return {
        template: template,
        created() {
            let self = this;
            axios.get('/api/end-city-chunks').then(function (response) {
                self.config = response.data;
            });
        },
        data() {
            return {
                config: null
            };
        },
        methods: {
            update() {
                let self = this;
                axios.post('/api/end-city-chunks', this.config).then(function (response) {
                    self.config = response.data;
                });
            }
        }
    }
}

export { createComponent }
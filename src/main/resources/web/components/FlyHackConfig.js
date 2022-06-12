function createComponent(template) {
    return {
        template: template,
        created() {
            let self = this;
            axios.get('/api/fly-hack').then(function (response) {
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
                axios.post('/api/fly-hack', this.config).then(function (response) {
                    self.config = response.data;
                });
            }
        }
    }
}

export { createComponent }
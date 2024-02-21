const blogPosts = [
    {
        title: "Understanding Promise.all",
        introduction: "In JavaScript, Promise.all is a useful method for executing multiple promises concurrently...",
        contentSections: [
            {
                title: "What is Promise.all?",
                description: "Promise.all is a method that takes an iterable of promises as input and returns a single Promise that resolves when all of the promises in the iterable have resolved or when the iterable contains no promises.",
                codeSnippet: {
                    language: "javascript",
                    code: `
                        const promise1 = new Promise((resolve, reject) => {
                            setTimeout(() => {
                                resolve('Promise 1 resolved');
                            }, 1000);
                        });

                        const promise2 = new Promise((resolve, reject) => {
                            setTimeout(() => {
                                resolve('Promise 2 resolved');
                            }, 2000);
                        });

                        const promise3 = new Promise((resolve, reject) => {
                            setTimeout(() => {
                                resolve('Promise 3 resolved');
                            }, 3000);
                        });

                        Promise.all([promise1, promise2, promise3])
                            .then(values => {
                                console.log(values);
                            })
                            .catch(error => {
                                console.error(error);
                            });
                    `
                }
            },
            {
                title: "Usage of Promise.all",
                description: "Promise.all is commonly used when you need to execute multiple asynchronous operations concurrently and wait for all of them to complete before proceeding. It can be useful for tasks such as fetching data from multiple sources, performing multiple database operations, or making multiple API requests.",
                codeSnippet: {
                    language: "javascript",
                    code: `
                        // Example usage of Promise.all
                        const urls = ['https://api.example.com/data1', 'https://api.example.com/data2', 'https://api.example.com/data3'];

                        const promises = urls.map(url => fetch(url));

                        Promise.all(promises)
                            .then(responses => Promise.all(responses.map(response => response.json())))
                            .then(data => {
                                console.log(data);
                            })
                            .catch(error => {
                                console.error(error);
                            });
                    `
                }
            }
        ],
        date: "2024-02-19",
        author: "John Doe"
    },
    // Add more blog posts as needed
];

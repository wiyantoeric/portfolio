function Services({ content }) {
    return (
    <div id="service" className="px-16 py-24 flex flex-col gap-y-8">
        <p><b>SERVICES</b></p>
        <p className="text-6xl w-1/2">{content.title}</p>
        <p className="text-2xl font-medium">{content.description}</p>
            <div className="w-full h-screen grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-16 md:justify-start">
                    <img className="rounded-3xl w-5/6" src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Sunset in the mountains" />
                    <img className="rounded-3xl w-5/6" src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Sunset in the mountains" />
                </div>
                <div className="flex flex-col gap-16 md:justify-center">
                    <img className="rounded-3xl w-5/6" src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Sunset in the mountains" />
                    <img className="rounded-3xl w-5/6" src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Sunset in the mountains" />
                </div>
                <div className="flex flex-col gap-16 md:justify-end">
                    <img className="rounded-3xl w-5/6" src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Sunset in the mountains" />
                    <img className="rounded-3xl w-5/6" src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Sunset in the mountains" />
                </div>
            </div>
    </div>
    );
  }
  
  export default Services;
  
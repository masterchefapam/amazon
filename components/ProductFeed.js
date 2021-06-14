import Product from '../components/Product';

function ProductFeed({products}) {
    return (
        <div className="grid grid-flow-row-dense
                        md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
                        md:-mt-52 sm:-mt-36 ">
           

            {/* This is just another way of products.map(product=>(
                <p>{products.title}</p>
            )) */}

            {products.map((product,i)=>(
                <Product 
                key={i}
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}
                />
            ))}
        </div>
    );
}

export default ProductFeed

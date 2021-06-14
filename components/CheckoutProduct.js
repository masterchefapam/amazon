import {StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Currency from 'react-currency-formatter';
import {useDispatch } from 'react-redux';
import {addToBasket,removeFromBasket} from '../slices/basketSlice';

function CheckoutProduct({ id, title, price,description,category,hasPrime,rating,image}) 
    {


    const dispatch = useDispatch();

    const addItemToBasket = () =>{
        const product = {
            id,
            title,
            price,
            description,
            category,
            image,
            rating,
            hasPrime
        }

        //sending the product as an action to the REDUX store.. the basket slice
        dispatch(addToBasket(product))
    }

    //remove item from redux store
    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({ id} ))
    }



    return (
        <div className="grid grid-cols-5">
            {/* Left Col */}            
            <Image src={image} width={200} height={200}  objectFit="contain"/>

            {/* Middle Col */}
            <div className="col-span-3 mx-5 ">
            <p>{title}</p>
            <div className="flex ">
                {Array(rating)
                .fill()
                .map((_, i)=> (
                    <StarIcon key={i} className=" text-yellow-500" width={20} height={20} />
                ))}
            </div>
           
             <p className="text-xs my-2 line-clamp-3">
                 {description}
             </p>
             <Currency quantity={price} currency="USD"/>
             {hasPrime && (
                 <div className="flex items-center space-x-1">
                     <img 
                        loading="lazy" 
                        className="w-12"
                        src="https://links.papareact.com/fdw" alt=""/>
                        <p className="text-xs text-gray-500">
                            FREE Next-Day Delivery
                        </p>
                 </div>
             )}
             <hr/>
           </div>
           
             
              
            {/* Right Col */}
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button onClick={addItemToBasket}className="button ">
                    Add to Basket
                </button>
                <button onClick={removeItemFromBasket} className="button ">
                    Remove from Basket
                </button>
            </div>
        
        </div>
    )
}

export default CheckoutProduct

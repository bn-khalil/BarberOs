import { useState } from 'react'
import Button from '../../components/Button'
import type { ServiceData } from './ServiceDashboard';
import { addNewService } from '../../services/ServiceService';
import { HttpStatusCode } from 'axios';

function ServiceCreate({setCurrentSession}:any) {
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [duration, setDuration] = useState(0);
    const [image, setImage] = useState("");

    const handlSubbmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true);
        try {
            const serverData: ServiceData = {
                title: title,
                description: description,
                price: price,
                duration: duration,
                image: image
            };
            const response = await addNewService(serverData);
            if (response.status == HttpStatusCode.Created) {
                setLoading(false);
                setCurrentSession('services');
            }
        } catch (error) {
            
        }
    }
    return (
    <div className=''>
        <div className="flex items-center justify-between">
            <h1 className='font-sans text-gold text-xl'>Create Service</h1>
        </div>
            <div className="mx-auto w-1/2" onSubmit={handlSubbmit}>
                <form className="text-left space-y-6 text-txt-col/60">
                    <div>
                        <label className="block mb-2 text-md font-medium">Title</label>
                        <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter service title..."
                        className="w-full p-3 border border-gold/50 focus:ring-1 focus:ring-gold focus:border-gold outline-none transition-all"
                        required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-md font-medium">Duration</label>
                        <input
                        type="number"
                        value={duration}
                        onChange={(e) => setDuration(e.target.valueAsNumber)}
                        placeholder="Enter service duration..."
                        className="w-full p-3 border border-gold/50 focus:ring-1 focus:ring-gold focus:border-gold outline-none transition-all"
                        required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-md font-medium">Price</label>
                        <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.valueAsNumber)}
                        placeholder="Enter service price..."
                        className="w-full p-3 border border-gold/50 focus:ring-1 focus:ring-gold focus:border-gold outline-none transition-all"
                        required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-md font-medium">Description</label>
                        <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter service description..."
                        className="w-full h-30 p-3 border border-gold/50 focus:ring-1 focus:ring-gold focus:border-gold outline-none transition-all"
                        required
                        />
                    </div>
                    <Button type="submit" label={!loading?"Create": "Waiting..."} className=""/>
                </form>
            </div>
    </div>
  )
}

export default ServiceCreate
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
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [message, setMessage] = useState("");
    const [requreImage, setRequreImage] = useState(false);
    const formData = new FormData();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) {
                alert("Image is too large! Max 2MB.");
                return;
            }
            
            setSelectedImage(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handlSubbmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!selectedImage){
            setRequreImage(true);
            return;
        }
        setRequreImage(false);

        setLoading(true);
        try {
            formData.append('title', title);
            formData.append('description', description);
            formData.append('price', price.toString());
            formData.append('duration', duration.toString());
            formData.append('image', selectedImage);
            
            const response = await addNewService(formData);
            if (response.status == HttpStatusCode.Created) {
                setLoading(false);
                setCurrentSession('services');
            }
        } catch (error) {
            
        }
    }
    return (
    <div className='w-full h-[80vh] flex flex-col no-scrollbar'>
        <div className="flex items-center justify-between">
            <h1 className='font-sans text-gold text-xl'>Create Service</h1>
        </div>
        <div className="flex-1  overflow-y-auto px-4 custom-scrollbar no-scrollbar relative">
            {/* <div className=" absolute py-1 px-4 text-center w-fit bg-red-600 right-1/2 rou">{}</div> */}
            <div className="mx-auto h-full w-1/2 py-4 no-scrollbar" onSubmit={handlSubbmit}>
                <form className="h-full text-left space-y-6 text-txt-col/60 overflow-auto no-scrollbar">
                <div>
                        <label className="block mb-2 text-md font-medium">Service Image</label>
                        <div className="relative group">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            />
                            
                            <div className={`w-full p-3 border ${!requreImage ? 'border-gold/50':'border-red-500'}  bg-transparent flex items-center justify-between transition-all group-hover:border-gold ${previewUrl ? 'border-solid' : 'border-dashed'}`}>
                                <div className="flex items-center space-x-3">
                                    {previewUrl ? (
                                        <img 
                                            src={previewUrl} 
                                            alt="Preview" 
                                            className="w-10 h-10 object-cover border border-gold/30" 
                                        />
                                    ) : (
                                        <div className="w-10 h-10 border border-gold/20 flex items-center justify-center bg-gold/5">
                                            <span className="text-gold text-lg">+</span>
                                        </div>
                                    )}
                                    <span className="text-sm italic">
                                        {selectedImage ? selectedImage.name : "Upload service image..."}
                                    </span>
                                </div>
                                <span className={`text-xs uppercase tracking-widest ${!requreImage ? 'text-gold':'text-red-500'}  font-bold`}>Browse</span>
                            </div>
                        </div>
                        <p className="mt-2 text-[10px] uppercase tracking-tighter opacity-40">Max size: 2MB (JPG, PNG, WebP)</p>
                    </div>
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
            
    </div>
  )
}

export default ServiceCreate
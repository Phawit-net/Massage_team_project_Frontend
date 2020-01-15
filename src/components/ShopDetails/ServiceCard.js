import React, { Component } from 'react'


export default class ServiceList extends Component {

    render() {
        return (
            <div style={{ border: "2px solid brown", width: "80%", height: "110vh", margin:" 200px auto", display:"flex", flexDirection:"column"}}>
                  <div stlye={{display:"inline-block", marginLeft:"100px"}}> <h3> Service</h3></div>

                    {/*  this.map () => to run each card*/}
                    <div>
                    <div style={{ height:"100vh", display:"grid", gridTemplateColumns: "auto auto", alignContent:"space-evenly", justifyContent:"space-evenly"}}> 

                        {/*  each card  */}
                        <div style={{border: "1px solid black", width:"35vw", height:"40vh", padding:"15px"}}>

                            <div style={{ maginTop:"50px", width:"100%", height:"90%", display:"grid", gridTemplateColumns:"35% 60%", justifyContent:"space-between"}}>
                                <div> <img style={{width:"100%", height:"100%"}} src="http://www.thaiticketmajor.com/variety/img_content/imgeditor/sky-mirror-beach.jpg" alt="test" /> </div>
                                <div title="text" style={{width:"100%", height:'200px', overflow:"scroll"}}> 
                                    <strong> heading </strong>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, numquam quas incidunt modi rerum ipsam similique ipsa hic at possimus excepturi et aut dolore. Cumque et animi atque praesentium officia nisi hic earum aut impedit rerum odio asperiores quos quidem, deleniti sit reiciendis dolor nulla nostrum. Recusandae assumenda deserunt magni error voluptate vero, vel magnam quos suscipit ipsa saepe et similique, excepturi, aperiam sed voluptatum aliquid odio perferendis qui quo accusantium totam illum itaque numquam. Nostrum quidem qui, optio sint deleniti reiciendis aspernatur excepturi vel? Perspiciatis deserunt labore ratione ea reprehenderit quasi iusto quisquam obcaecati tempora voluptatem hic, accusantium velit vero recusandae. Aliquid vero odit, minus voluptates fuga doloremque, consectetur enim id numquam, modi voluptas. Magnam earum cumque minima iusto dignissimos incidunt ex, hic fuga voluptates repellat corrupti commodi exercitationem quas dolore illo odit in ullam ab qui, ut dicta atque voluptatem molestias laudantium? Incidunt itaque voluptates omnis debitis assumenda ut accusantium aliquid, alias iure, officiis quo ex? Architecto ea nulla dolore mollitia, maiores, dolorem repellat ex quos quod delectus voluptatibus assumenda enim labore doloribus repudiandae, eveniet suscipit tenetur magnam saepe itaque. Rem voluptas illum debitis possimus unde quo ipsa quam! Facere quia vitae architecto consequuntur obcaecati explicabo nostrum ex?
                                </div>
                            </div>

                            <div style={{display: "inline-block"}}> <button style={{float:"right", margin:"10px 40px"}}>button</button> </div>

                        </div>
                        {/* end of card */}


                        {/*  each card  */}
                        <div style={{border: "1px solid black", width:"35vw", height:"40vh", padding:"15px"}}>

                            <div style={{ maginTop:"50px", width:"100%", height:"90%", display:"grid", gridTemplateColumns:"35% 60%", justifyContent:"space-between"}}>
                                <div> <img style={{width:"100%", height:"100%"}} src="http://www.thaiticketmajor.com/variety/img_content/imgeditor/sky-mirror-beach.jpg" alt="test" /> </div>
                                <div title="text" style={{width:"100%", height:'200px', overflow:"scroll"}}> 
                                    <strong> heading </strong>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, numquam quas incidunt modi rerum ipsam similique ipsa hic at possimus excepturi et aut dolore. Cumque et animi atque praesentium officia nisi hic earum aut impedit rerum odio asperiores quos quidem, deleniti sit reiciendis dolor nulla nostrum. Recusandae assumenda deserunt magni error voluptate vero, vel magnam quos suscipit ipsa saepe et similique, excepturi, aperiam sed voluptatum aliquid odio perferendis qui quo accusantium totam illum itaque numquam. Nostrum quidem qui, optio sint deleniti reiciendis aspernatur excepturi vel? Perspiciatis deserunt labore ratione ea reprehenderit quasi iusto quisquam obcaecati tempora voluptatem hic, accusantium velit vero recusandae. Aliquid vero odit, minus voluptates fuga doloremque, consectetur enim id numquam, modi voluptas. Magnam earum cumque minima iusto dignissimos incidunt ex, hic fuga voluptates repellat corrupti commodi exercitationem quas dolore illo odit in ullam ab qui, ut dicta atque voluptatem molestias laudantium? Incidunt itaque voluptates omnis debitis assumenda ut accusantium aliquid, alias iure, officiis quo ex? Architecto ea nulla dolore mollitia, maiores, dolorem repellat ex quos quod delectus voluptatibus assumenda enim labore doloribus repudiandae, eveniet suscipit tenetur magnam saepe itaque. Rem voluptas illum debitis possimus unde quo ipsa quam! Facere quia vitae architecto consequuntur obcaecati explicabo nostrum ex?
                                </div>
                            </div>

                            <div style={{display: "inline-block"}}> <button style={{float:"right", margin:"10px 40px"}}>button</button> </div>

                        </div>
                        {/* end of card */}

                        {/*  each card  */}
                        <div style={{border: "1px solid black", width:"35vw", height:"40vh", padding:"15px"}}>

                            <div style={{ maginTop:"50px", width:"100%", height:"90%", display:"grid", gridTemplateColumns:"35% 60%", justifyContent:"space-between"}}>
                                <div> <img style={{width:"100%", height:"100%"}} src="http://www.thaiticketmajor.com/variety/img_content/imgeditor/sky-mirror-beach.jpg" alt="test" /> </div>
                                <div title="text" style={{width:"100%", height:'200px', overflow:"scroll"}}> 
                                    <strong> heading </strong>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, numquam quas incidunt modi rerum ipsam similique ipsa hic at possimus excepturi et aut dolore. Cumque et animi atque praesentium officia nisi hic earum aut impedit rerum odio asperiores quos quidem, deleniti sit reiciendis dolor nulla nostrum. Recusandae assumenda deserunt magni error voluptate vero, vel magnam quos suscipit ipsa saepe et similique, excepturi, aperiam sed voluptatum aliquid odio perferendis qui quo accusantium totam illum itaque numquam. Nostrum quidem qui, optio sint deleniti reiciendis aspernatur excepturi vel? Perspiciatis deserunt labore ratione ea reprehenderit quasi iusto quisquam obcaecati tempora voluptatem hic, accusantium velit vero recusandae. Aliquid vero odit, minus voluptates fuga doloremque, consectetur enim id numquam, modi voluptas. Magnam earum cumque minima iusto dignissimos incidunt ex, hic fuga voluptates repellat corrupti commodi exercitationem quas dolore illo odit in ullam ab qui, ut dicta atque voluptatem molestias laudantium? Incidunt itaque voluptates omnis debitis assumenda ut accusantium aliquid, alias iure, officiis quo ex? Architecto ea nulla dolore mollitia, maiores, dolorem repellat ex quos quod delectus voluptatibus assumenda enim labore doloribus repudiandae, eveniet suscipit tenetur magnam saepe itaque. Rem voluptas illum debitis possimus unde quo ipsa quam! Facere quia vitae architecto consequuntur obcaecati explicabo nostrum ex?
                                </div>
                            </div>

                            <div style={{display: "inline-block"}}> <button style={{float:"right", margin:"10px 40px"}}>button</button> </div>

                        </div>
                        {/* end of card */}

                        {/*  each card  */}
                        <div style={{border: "1px solid black", width:"35vw", height:"40vh", padding:"15px"}}>

                            <div style={{ maginTop:"50px", width:"100%", height:"90%", display:"grid", gridTemplateColumns:"35% 60%", gridGap:"20px",  justifyContent:"space-evenly"}}>
                                <div> <img style={{width:"100%", height:"100%"}} src="http://www.thaiticketmajor.com/variety/img_content/imgeditor/sky-mirror-beach.jpg" alt="test" /> </div>
                                <div title="text" style={{width:"100%", height:'200px', overflow:"scroll"}}> 
                                    <strong> heading </strong>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, numquam quas incidunt modi rerum ipsam similique ipsa hic at possimus excepturi et aut dolore. Cumque et animi atque praesentium officia nisi hic earum aut impedit rerum odio asperiores quos quidem, deleniti sit reiciendis dolor nulla nostrum. Recusandae assumenda deserunt magni error voluptate vero, vel magnam quos suscipit ipsa saepe et similique, excepturi, aperiam sed voluptatum aliquid odio perferendis qui quo accusantium totam illum itaque numquam. Nostrum quidem qui, optio sint deleniti reiciendis aspernatur excepturi vel? Perspiciatis deserunt labore ratione ea reprehenderit quasi iusto quisquam obcaecati tempora voluptatem hic, accusantium velit vero recusandae. Aliquid vero odit, minus voluptates fuga doloremque, consectetur enim id numquam, modi voluptas. Magnam earum cumque minima iusto dignissimos incidunt ex, hic fuga voluptates repellat corrupti commodi exercitationem quas dolore illo odit in ullam ab qui, ut dicta atque voluptatem molestias laudantium? Incidunt itaque voluptates omnis debitis assumenda ut accusantium aliquid, alias iure, officiis quo ex? Architecto ea nulla dolore mollitia, maiores, dolorem repellat ex quos quod delectus voluptatibus assumenda enim labore doloribus repudiandae, eveniet suscipit tenetur magnam saepe itaque. Rem voluptas illum debitis possimus unde quo ipsa quam! Facere quia vitae architecto consequuntur obcaecati explicabo nostrum ex?
                                </div>
                            </div>

                            <div style={{display: "inline-block"}}> <button style={{float:"right", margin:"10px 40px"}}>button</button> </div>

                        </div>
                        {/* end of card */}
                        

                    </div>
                    </div>

            </div>
        )
    }
}
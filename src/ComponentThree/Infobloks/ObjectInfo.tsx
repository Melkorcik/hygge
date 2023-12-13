import '../style/MediaThree.css';

interface ITags{
    tag_start:any,
    tag_one: any,
    tag_two: any,
    tag_three: any,
}

const INFO:ITags = {
        tag_start:<div><p className="p-text-three-1">
                Aenean lacinia bibendum nulla sed consectetur. 
                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, 
                ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod semper. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="p-text-three-2">
                Donec sed odio dui. Donec sed odio dui. 
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. 
                Maecenas faucibus mollis interdum.
            </p>
            <p className="p-text-three-3">
                - Mauris lacinia dui non metus dignissim.<br/>
                - Etiam elit tellus, condimentum tempor lobortis.<br/>
                - Aliquam pharetra vestibulum arcu, eget iaculis.
            </p></div>,
        tag_one:<div><p className="p-text-three-1">
                Aenean lacinia bibendum nulla sed consectetur. 
                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, 
                ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod semper. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="p-text-three-2">
                Donec sed odio dui. Donec sed odio dui. 
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. 
                Maecenas faucibus mollis interdum.
            </p>
            <p className="p-text-three-3">
                - Mauris lacinia dui non metus dignissim.<br/>
                - Etiam elit tellus, condimentum tempor lobortis.<br/>
                - Aliquam pharetra vestibulum arcu, eget iaculis.
            </p></div>,
        tag_two:<div><p className="p-text-three-1">
                Nullam quis risus eget urna mollis ornare vel eu 
                leo. Donec sed odio dui. Donec ullamcorper nulla 
                non metus auctor fringilla. Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Vestibulum id ligula porta 
                felis euismod semper. Cras mattis consectetur purus sit amet fermentum.
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                Maecenas faucibus mollis interdum.
            </p></div>,
        tag_three:<div>
            <p className="p-text-three-1">
                Nullam id dolor id nibh ultricies vehicula ut id elit. 
                Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Nulla vitae elit libero, a pharetra augue. 
                Aenean lacinia bibendum nulla sed consectetur.
            </p>
            <p className="p-text-three-2">
                Cras justo odio, dapibus ac facilisis in, egestas eget quam. 
                Donec ullamcorper nulla non metus auctor fringilla. Fusce dapibus, 
                tellus ac cursus commodo, tortor mauris condimentum nibh, 
                ut fermentum massa justo sit amet risus..
            </p>
        </div>
}

export default INFO;
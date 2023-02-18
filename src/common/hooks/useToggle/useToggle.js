import { useState } from "react";

export default function useToggle(initialValue = false){
    const [isOpen, setOpen] = useState(initialValue);

    function onOpen(){
        setOpen(true);
    }

    function onClose(){
        setOpen(false);
    }
    function onToggle(){
        setOpen(!isOpen);
    }

    return [isOpen, {onOpen, onClose, onToggle}];
}
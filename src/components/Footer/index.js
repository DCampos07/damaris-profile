import React from 'react';
import { IconName } from "react-icons/go";

function Footer() {
    return (
        <header class="flex-row px-5">
                    <h2>Contact Me</h2>
                <div>
                    <ul class="flex-row">
                        <li class="mx-3" color="link"> 407-799-7456</li>
                        <li class="mx-3" color="link"> <a href="dccampos00@gmail.com"></a>E-mail</li>
                        <li class="mx-3" color="link"> <a href="https://github.com/DCampos07">Github</a></li>
                        <li class="mx-3" color="link"> <a href="https://www.linkedin.com/in/damaris-c-870a1472">Linkedin</a></li>
                    </ul>
                </div>
        </header>
    );
};

export default Footer;
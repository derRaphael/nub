<?php

namespace nub\strings
{
    use \nub\core\nub as nub;

    class nub_echo extends nub
    {
        public function __construct( $value = "" )
        {
            $this->value = func_get_args();
            $this->__init();
        }
        
        public function __init()
        {
            foreach( $this->value as $string )
            {
                echo $string;
            }
        }
    }
}

?>

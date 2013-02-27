<?php
namespace nub\core
{
    class nub extends \nub\core\abstracts\nub_abstract
    {
        public function __construct()
        {
            $this->__init();
            $this->__compute();
            $this->__disable();
        }
        
        public function __value()
        {
            return $this->value;
        }        
    }    
}
?>

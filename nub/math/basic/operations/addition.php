<?php

namespace nub\math\basic\operations
{
    use \nub\core\nub as nub;
    use \nub\types\number as number;

    class addition extends nub
    {
        public $summands = array();
        
        public function __construct()
        {
            $this->__init();
        }
        
        public function __init()
        {
            $this->__set_summand( new number( 0 ) );
        }
        
        public function __set_summand( number $val )
        {
            $this->summands[] = $val->value;
        }
        
        public function __compute()
        {
            $result = 0;
            foreach( $this->summands as $summand )
            {
                $result = $result + $summand;
            }
            $this->value = (new number( $result ))->value;
        }
    }

}
?>

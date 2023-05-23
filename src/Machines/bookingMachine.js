import { createMachine } from 'xstate';

const bookingMachine = createMachine({
  id : "Buy plane tickets",
  initial : "inicial",
  states : {
    inicial : {
      on : {
        START : "search"
      }
    },
    search : {
      on : {
        CONTINUE : 'passengers',
        CANCEL : 'inicial'
      }
    },
    tickets : {
      on : {
        FINISH : 'inicial'
      }
    },
    passengers : {
      on : {
        DONE : 'tickets',
        CANCEL : 'inicial'
      }
    }
    
  }
})

export default bookingMachine;
export default {
    
    template : 
    `
    <button 
        :class= 
        "{
            'border rounded font-weight-800 p-5 disabled:cursor-not-allowed': true,
            'bg-blue-200 hover:bg-blue-400': type === 'primary',
            'bg-purple-200 hover:bg-purple-400': type === 'secondary',
            'bg-gray-200 hover:bg-gray-400': type === 'muted',
        }" 

        :disabled = "processing"
      >
        <slot />
    </button>
    `,

    props : {
        type : {
            type: String,
            default: 'primary'
        },
        processing : {
            type: Boolean,
            default: false
        }
    }

}
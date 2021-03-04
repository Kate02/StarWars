export default {  
  methods: {
    sortname(data,text) {
      let results = data.sort(function(a, b) {
        let nameA=a[text].toLowerCase(), 
            nameB=b[text].toLowerCase()

        if (nameA < nameB) return -1
        if (nameA > nameB) return 1
        return 0          
      })

      return results
    }
  }
}
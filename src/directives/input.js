import { PHONE } from '@/consts'

const input = {
  created(el, binding) {
    const { arg, value } = binding
    // oldValue

    if (!arg) return

    switch (arg) {
      case PHONE:
        return phoneModified(value)
    }
  },
  beforeUpdate() {},
  beforeUnmount() {}
}

function phoneModified(num) {
  console.log(num)
}

export default {
  directives: {
    input
  }
}

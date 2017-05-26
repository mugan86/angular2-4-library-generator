import re
import sys

# use reference: https://www.tutorialspoint.com/python/python_reg_expressions.htm

MODULE_REGEX = r'^[a-zA-Z]{5,10} [A-Za-z]{0,10}$'

module_name = '{{ cookiecutter.library_name }}'

if not re.match(MODULE_REGEX, module_name):
    print('ERROR: %s is not a valid angular 2/4 library name!' % module_name)
    print('Please try again and input two words maximum and min 5 characters length one word.')
    print('For example: angular keyboard.')
    # exits with status 1 to indicate failure
    sys.exit(1)
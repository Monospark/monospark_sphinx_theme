from setuptools import setup

setup(
    name='monospark_sphinx_theme',
    version='1.0',
    url='https://github.com/monospark/monospark_sphinx_theme',
    license='MIT',
    author='Christopher Schnick',
    author_email='c.schnick@monospark.org',
    description='Sphinx theme which is used for Monospark docs.',
    packages=['monospark_sphinx_theme'],
    package_data={'monospark_sphinx_theme': [
        'theme.conf',
        '*.html',
        'static/**/*'
    ]},
    install_requires=['sphinx >= 1.3.1']
)

# -*- coding: utf-8 -*-
#
# Receives and responds to the HTTP request from the Python server.
#
# Copyright (c) 2015 carlosperate https://github.com/carlosperate/
# Licensed under the Apache License, Version 2.0 (the "License"):
#   http://www.apache.org/licenses/LICENSE-2.0
#
from __future__ import unicode_literals, absolute_import
import os

try:
    # 2.x name
    import QTranslator, QLocale, QLibraryInfo
    import QFileDialog, QApplication, QWidget
except ImportError:
    # 3.x name
    from PyQt5.QtCore import QTranslator, QLocale, QLibraryInfo
    from PyQt5.QtWidgets import QFileDialog, QApplication, QWidget


def get_translator():
    translator = QTranslator()

    loc = 'qt_' + QLocale.system().name()[:2]
    
    load=translator.load(
        loc,
        QLibraryInfo.location(QLibraryInfo.TranslationsPath)
    )

    return translator
#
# Dealing with Directories and files
#
def browse_file_dialog():
    """
    Opens a file browser and selects executable files
    :return: Full path to selected file
    """
    app = QApplication([])
    t = get_translator()
    app.installTranslator(t)
    widget = QWidget()
    file_path = getFileName(None) 
    widget.destroy()  
    if file_path:
        return os.path.normpath(file_path)
    else:
        return file_path


def browse_dir_dialog():
    """
    Opens a directory browser to select a folder.
    :return: Full path to the selected folder
    """
    app = QApplication([]) 
    t = get_translator()
    app.installTranslator(t)
    dir_path = getDirectory(None)
    if dir_path:
        return os.path.normpath(dir_path)
    else:
        return dir_path


def getFileName(self):
        dialog=QFileDialog(parent=None, caption='Seleccionar Archivo', directory=os.getcwd(), filter='Todos los archivos (*)')
        dialog.setLabelText( dialog.Reject, "&Cancelar")
        dialog.setViewMode( dialog.List )
        dialog.exec()
        response = dialog.selectedFiles()
        return response[0]


def getDirectory(self):
        dialog=QFileDialog(parent=None, caption='Seleccionar el directorio o carpeta', directory=os.getcwd())
        dialog.setLabelText( dialog.Reject, "&Cancelar")
        dialog.setViewMode( dialog.List )
        dialog.setFileMode( dialog.DirectoryOnly )
        
        dialog.exec()
        response = dialog.selectedFiles()
        return response[0]
